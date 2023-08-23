import UpdateForm from './Form';
import React, { useState, useEffect } from 'react';
import Table from '../../../components/table/Table';
import Popup from '../../../components/popup/Popup';
import { fetchProject, deleteProject } from '../../../services/projectService';
import Button from '../../../components/atoms/button';
import AddProjectForm from './AddProjectForm';

const EditProjects = () => {
  const [projectData, setProjectData] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [rowData, setRowData] = useState({});
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [projectId, setProjectId] = useState(null);

  const [addProjectPopUp, setAddProjectPopUp] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
    setRowData({});
    setDeletePopUp(false);
    setAddProjectPopUp(false);
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
  const projectDelete = async (id) => {
    setProjectId(id);
    setDeleteMessage(`Do you want to delete the project with projectId: ${id}`);
    setDeletePopUp(true);
  };
  const removeProjectById = async () => {
    const response = await deleteProject(projectId);
    setDeleteMessage(response.data.message);
    setDeletePopUp(true);
  };

  // handling the side effect of the setTimer
  useEffect(() => {
    if (deletePopUp) {
      const timeoutId = setTimeout(() => {
        setDeleteMessage(null);
        setDeletePopUp(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout if the component unmounts or the effect re-runs
      };
    }
  }, [deletePopUp]);

  // add project
  const addNewProject = async () => {
    setAddProjectPopUp(true);
  };

  return (
    <>
      <div>
        <Button outlined="true" onClick={addNewProject}>
          Add New Project
        </Button>
      </div>
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
      {/* Delete operation popup */}
      <Popup visible={deletePopUp} onClose={closePopup}>
        <p>{deleteMessage}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px',
          }}
        >
          <Button onClick={removeProjectById}>Delete</Button>
          <Button onClick={closePopup}>Cancel</Button>
        </div>
      </Popup>
      <Popup visible={addProjectPopUp} onClose={closePopup}>
        <AddProjectForm />
      </Popup>
    </>
  );
};

export default EditProjects;
