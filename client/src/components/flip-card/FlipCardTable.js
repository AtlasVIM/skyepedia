import React from 'react'

export const FlipCardTable = (props) => {
    const entry = props.props
  return (
    <div className='table-container'>
                {Object.keys(entry.tables).map((key) => {
                    return (<tr>
                        <th>{key
                        .split(' ')
                        .map((word) => {
                            return word[0].toUpperCase()+word.substring(1)+' '
                        })}
                        </th>
                        <td> : </td>
                        {entry.tables[key].map((arrItem) => {
                           return (<td>{arrItem
                            .split(' ')
                            .map((word) =>{
                                return word[0].toUpperCase()+word.substring(1)+' '
                            })}
                            , </td>)
                        })}
                    </tr>)
                })}
    </div>
  )
}
