import UpdateForm from '../profile/Form';
import React, { useState, useEffect } from 'react';
import Table from '../../../components/table/Table';
import Popup from '../../../components/popup/Popup';
import { fetchProject, deleteProject } from '../../../services/projectService';

const EditProjects = () => {
  const [projectData, setProjectData] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [rowData, setRowData] = useState({});

  const closePopup = () => {
    setPopupVisible(false);
    setRowData({});
  };

  useEffect(() => {
    // Fetch the profile data
    const fetchData = async () => {
      const fetchedData = await fetchProject();
      const response = fetchedData.data.data;
      if (response) {
        setProjectData(response);
      }
    };
    fetchData();
  }, [projectData]);

  const projectUpdate = (data) => {
    if (data) {
      setRowData(data);
      setPopupVisible(true);
    }
  };
  const projectDelete = async (data) => {
    await deleteProject(data._id);
  };

  return (
    <>
      <div>
        {projectData.length > 0 ? (
          <Table
            headers={Object.keys(projectData[0])}
            data={projectData}
            addTableHeader="action"
            addTableCell
            handleUpdate={projectUpdate}
            handleDelete={projectDelete}
          />
        ) : (
          <p>...fetching data</p>
        )}
      </div>
      {/* popup */}
      <div>
        <Popup visible={popupVisible} onClose={closePopup}>
          {Object.keys(rowData).length > 0 ? (
            <UpdateForm rowData={rowData} />
          ) : (
            <p>...fetching data</p>
          )}
        </Popup>
      </div>
    </>
  );
};

export default EditProjects;
