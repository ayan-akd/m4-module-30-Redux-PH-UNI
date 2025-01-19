import { Modal } from "antd";
import { TAcademicFacultyTableData } from "@/pages/admin/academicManagement/AcademicFaculty";
import EditAcademicFaculty from "../EditAcademicFaculty";

export default function EditAcademicFacultyModal({
  record,
  showModal,
  setIsModalOpen,
}: {
  record: TAcademicFacultyTableData;
  showModal: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <div>
      <Modal open={showModal} footer={null} closable={false}>
        <EditAcademicFaculty
          record={record}
          setIsModalOpen={setIsModalOpen}
        ></EditAcademicFaculty>
      </Modal>
    </div>
  );
}
