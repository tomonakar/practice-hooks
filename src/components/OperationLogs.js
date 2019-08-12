import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>操作ログ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {
            state.operationLogs.map((operation, index) => {
              return <OperationLog key={index} operationLogs={operation} />
            })
          }

        </tbody>
      </table>
    </>
  )
}

export default OperationLogs