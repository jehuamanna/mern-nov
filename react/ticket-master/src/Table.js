import React from 'react'

class Table extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Message </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}


export default Table