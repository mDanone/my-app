import './CalendarBlock.css';


function CalendarBlock() {
    

    return (
        <div className="calendar-container">
            <p className="calendar-date-day">01</p>
            <div className="calendar-lower-block">
                <p className="calendar-week-day">Понедельник</p>
                <p className="calendar-event">Нет событий</p>
            </div>
        </div>
    )
}

export default CalendarBlock;
