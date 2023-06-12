import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'




function InfoPage() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Programming Languages</TableCell>
            <TableCell>Frameworks</TableCell>
            <TableCell>Tools</TableCell>
            <TableCell>Soft Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Java</TableCell> 
            <TableCell>Spring</TableCell>
            <TableCell>Git</TableCell>
            <TableCell>Teamwork</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>JavaScript</TableCell>
            <TableCell>React</TableCell>
            <TableCell>Dynatrace</TableCell>
            <TableCell>Communication</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Python</TableCell>
            <TableCell>Android Studio</TableCell>
            <TableCell>Splunk</TableCell>
            <TableCell>Problem Solving</TableCell>
          </TableRow>
          </TableBody>  
      </Table>



    </div>
  )
}

export default InfoPage