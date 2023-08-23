import React from 'react';
import { TableContainer, TableHeader, TableRow, TableCell } from './styles';
import Button from '../atoms/button';

const Table = ({
  headers,
  data,
  addTableHeader,
  addTableCell,
  handleDelete, //function call to handle the delete operations with the row data passed
  handleUpdate, //function call to handle the update operations with the row data passed
}) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
          {addTableHeader && <TableHeader>{addTableHeader}</TableHeader>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
            {addTableHeader && addTableCell && (
              <TableCell>
                <div style={{ display: 'flex' }}>
                  <Button onClick={() => handleUpdate(row)}>U</Button>
                  <Button onClick={() => handleDelete(row._id)}>D</Button>
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;

/* 


const tableHeaders = [
    'title',
    'description',
    'technologies',
    'image',
    'githubUrl',
    'demoUrl',
    'isPersonalProject',
    'startDate',
    'endDate',
  ];
  const datas = [
    {
      title: 'project demo',
      description: 'project description',
      technologies: ['a', 'b'],
      image: 'skdfskld',
      githubUrl: 'https://signetic.com',
      demoUrl: 'https://demo.com',
      isPersonalProject: false,
      startDate: Date.now(),
      endDate: Date.now(),
    },
    {
      title: 'project demo',
      description: 'project description',
      technologies: ['a', 'b'],
      image: 'skdfskld',
      githubUrl: 'https://signetic.com',
      demoUrl: 'https://demo.com',
      isPersonalProject: false,
      startDate: Date.now(),
      endDate: Date.now(),
    },
  ];

  const tableData = datas.map((data) => {
    const newData = {
      ...data,
      image: data.image.substring(0, 5),
      technologies: data.technologies.join(', '), // Join the technologies array with commas
    };
    return Object.values(newData);
  });


  
      <div>
        <Table headers={tableHeaders} data={tableData} />
      </div>

*/
