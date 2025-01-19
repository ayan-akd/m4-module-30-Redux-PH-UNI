import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHSelect from "@/components/form/PHSelect";
import { Button, Col, Divider, Row, } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { bloodGroupOptions, genderOptions } from "./userManagementConstants";
import { academicSemesterOptions } from "../academicManagement/AcademicManagementConstants";
import { academicManagementHooks } from "@/hooks/academicManagementHooks";
import SkeletonInput from "antd/es/skeleton/Input";

export default function CreateStudent() {
  const { useGetAllAcademicDepartmentQuery } = academicManagementHooks;
  const { data: academicDepartmentData, isFetching } =
    useGetAllAcademicDepartmentQuery();
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (department: { _id: string; name: string }) => ({
      label: department.name,
      value: department._id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("name", data.name);
    // console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
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
              <PHInput name="dateOfBirth" label="Date of Birth" type="date" />
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
              <PHSelect
                name="academicSemester"
                label="Academic Semester"
                options={academicSemesterOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
             {
                isFetching ? (
                  <SkeletonInput active size="large" />
                ) : (
                  <PHSelect
                    name="academicDepartment"
                    label="Academic Department"
                    options={academicDepartmentOptions}
                  />
                )
             }
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
