// https://docs.google.com/spreadsheets/d/16ECac40fAYy9EGW1IKXw_YhP9tcOaUG_pzuOk9Pg74M/edit?usp=sharing

export function SendToSheets() {
    function update() {
        fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/16ECac40fAYy9EGW1IKXw_YhP9tcOaUG_pzuOk9Pg74M/values/{range}",
            {
                method: 'PUT'
                body: {
                    `1972334219!A1:B2`
                    JSON.stringify(["test"])
                }
            }
        )
    }   
    return( <div>
        <button onClick = {update()} />
        </div>
    )
    }