import React, { useState, Event } from "react";
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import { CiViewList } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import '../styles/Personal_account.css';
import '../styles/DataTable.css';
import Menu from '../comps/Menu'

function New_request() {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    const placeholder = searchValue.length === 0 ? "Найти обращение..." : "";
    const [iconActive, setIconActive] = useState(false);

    const columns = [
                 {
                     name: <span className="custom-table-header">Дата обращения</span>,
                     selector: 'date',
                     cell: row => <span className="custom-date-cell">{row.date}</span>
                 },
                 {
                     name: <span className="custom-table-header">Отправитель</span>,
                     selector: 'name',
                     cell: row => <span className="custom-name-cell">{row.name}</span>
                 },
                 {
                     name: <span className="custom-table-header">Действие</span>,
                     cell: row => <Button variant="primary" className="custom-action-button">Просмотр</Button>
                 }
             ];
    const data = [
        {
            id: 1,
            date: '21.03.2024',
            topic: 'Сломан принтер',
            name: 'Аноним',
            action: 'Просмотр'
        },
        {
            id: 2,
            date: '22.03.2024',
            topic: 'Не работает Wi-Fi',
            name: 'Анатолий Некрасов',
            action: 'Просмотр'
        }

    ]
    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const value = event.target.value.toLowerCase();
        const newData = data.filter(row =>
            row.date.toLowerCase().includes(value) ||
            row.topic.toLowerCase().includes(value) ||
            row.name.toLowerCase().includes(value)
        );
        setRecords(newData);
    }
     const handleIconClick = () => {
         console.log('Иконка была нажата');
         setIconActive(!iconActive);
     };
    return (
<div className="personal-account-container">
            <Menu/>
             <div className="content-p">
                 <div className='container mt-5'>
                     <div className="header">
                         <div className="left"></div>
                         <div className="right">
                    <input type="text" onChange={handleFilter} className="custom-search-input" placeholder={placeholder} />
                    <button className="custom-search-button" onClick={handleFilter}>
                           Поиск
                         </button>
                         </div>
                     </div>
                     <div className="data-section">
                         <div className="custom-table-name">
                             Новые обращения
                             <button className="custom-icon-button" onClick={handleIconClick}>
                                 <CiViewList size={30} className="icon" />
                             </button>
                             <button className="custom-search-icon" onClick={handleIconClick}>
                                 <IoIosSearch size={30} className="icon" />
                             </button>
                         </div>
                         <DataTable
                             columns={columns}
                             data={records}
                            fixedHeader
                             className="custom-data-table"
                         />
                     </div>
                 </div>
             </div>
         </div>
     );
 }

export default New_request;
