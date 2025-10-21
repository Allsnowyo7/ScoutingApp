// https://docs.google.com/spreadsheets/d/16ECac40fAYy9EGW1IKXw_YhP9tcOaUG_pzuOk9Pg74M/edit?usp=sharing

export function SendToSheets() {
    const formData = new FormData();
    formData.append("test", 1);
    function update() {
        fetch(
            "https://script.google.com/macros/s/AKfycbwNluKKBqlj7pUOjcYYnyCfO86rPxd5E4FJixmpldCHjkY5u8LP2woVBfJNnamv1gA/exec",
            {
                method: 'POST',
                body: formData
            }
        ).then(response => response.text())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (<div>
        <h1>
        <button onClick={update()} />
        </h1>
    </div>
    )
}