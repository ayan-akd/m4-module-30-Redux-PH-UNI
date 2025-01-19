import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHSelect from "@/components/form/PHSelect";
import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { bloodGroupOptions, genderOptions } from "./userManagementConstants";
import { academicManagementHooks } from "@/hooks/academicManagementHooks";
import SkeletonInput from "antd/es/skeleton/Input";
import PHDatePicker from "@/components/form/PHDatePicker";
import { useAddStudentMutation } from "@/redux/features/admin/User Management/userManagement.api";
import { toast } from "sonner";

const studentDefaultValues = {
  name: {
    firstName: "Diana",
    middleName: "Elena",
    lastName: "Martinez",
  },
  gender: "female",
  email: "de5.martinez@example.com",
  contactNo: "+1234567895",
  emergencyContactNo: "+0987654326",
  bloodGroup: "O-",
  presentAddress: "128 Elm Street, Springfield",
  permanentAddress: "461 Oak Avenue, Springfield",
  guardian: {
    fatherName: "George Martinez",
    fatherOccupation: "Lawyer",
    fatherContactNo: "+1122334500",
    motherName: "Isabella Martinez",
    motherOccupation: "Artist",
    motherContactNo: "+5566778894",
  },
  localGuardian: {
    name: "Chris Griffin",
    occupation: "Musician",
    contactNo: "+6677889905",
    address: "794 Pine Lane, Springfield",
  },
  admissionSemester: "6788f6327bb0785b01dffced",
  academicDepartment: "67583d6e053794374f6b6b0c",
};

export default function CreateStudent() {
  const [addStudent] = useAddStudentMutation();
  const { useGetAllSemestersQuery, useGetAllAcademicDepartmentQuery } =
    academicManagementHooks;
  const { data: semesterData, isFetching: sIsFetching } =
    useGetAllSemestersQuery(undefined);
  const academicSemesterOptions = semesterData?.data?.map(
    (semester: { _id: string; name: string; year: number }) => ({
      value: semester._id,
      label: `${semester.name} ${semester.year}`,
    })
  );
  const { data: academicDepartmentData, isFetching: dIsFetching } =
    useGetAllAcademicDepartmentQuery();
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (department: { _id: string; name: string }) => ({
      label: department.name,
      value: department._id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding Student....");
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    try {
      const res = await addStudent(formData);
      if (res.data) {
        toast.success("Student Added Successfully", {
          id: toastId,
        });
      }
      if (res.error) {
        toast.dismiss(toastId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="name.firstName" label="First Name" type="text" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="name.middleName" label="Middle Name" type="text" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="name.lastName" label="Last Name" type="text" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect name="gender" label="Gender" options={genderOptions} />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloodGroup"
                label="Blood Group"
                options={bloodGroupOptions}
              />
            </Col>
            <Divider>Contact Info.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="email" label="Email" type="email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="contactNo" label="Contact No." type="text" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="emergencyContactNo"
                label="Emergency Contact No."
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="presentAddress"
                label="Present Address"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="permanentAddress"
                label="Permanent Address"
                type="text"
              />
            </Col>
            <Divider>Guardian</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.fatherName"
                label="Father Name"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.fatherOccupation"
                label="Father Occupation"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.fatherContactNo"
                label="Father Contact No."
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.motherName"
                label="Mother Name"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.motherOccupation"
                label="Mother Occupation"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="guardian.motherContactNo"
                label="Mother Contact No."
                type="text"
              />
            </Col>
            <Divider>Local Guardian</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="localGuardian.name" label="Name" type="text" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.occupation"
                label="Occupation"
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.contactNo"
                label="Contact No."
                type="text"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.address"
                label="Address"
                type="text"
              />
            </Col>
            <Divider>Academic Info.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {sIsFetching ? (
                <SkeletonInput active size="large" />
              ) : (
                <PHSelect
                  name="admissionSemester"
                  label="Admission Semester"
                  options={academicSemesterOptions}
                />
              )}
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {dIsFetching ? (
                <SkeletonInput active size="large" />
              ) : (
                <PHSelect
                  name="academicDepartment"
                  label="Admission Department"
                  options={academicDepartmentOptions}
                />
              )}
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
}
