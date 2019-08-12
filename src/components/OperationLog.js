import React from 'react'

const OperationLog = ({operationLogs}) => {
  return (
  <>
    <tr>
      <td>{operationLogs.description}</td>
      <td>{operationLogs.operatedAt}</td>
    </tr>
  </>
  )
}

export default OperationLog