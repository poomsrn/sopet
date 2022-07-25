const DateToString = (date) => {
    let _date = date.getDate();
    let _month = date.getMonth() + 1;
    let _year = date.getFullYear() + 543;

    let _dateStr = _date.toString();
    let _monthStr = _month.toString();
    let _yearStr = _year.toString();

    return (_date < 10 ? "0" + _dateStr : _dateStr) + "/" +
        (_month < 10 ? "0" + _monthStr : _monthStr) + "/" +
        _yearStr
}

export default DateToString;