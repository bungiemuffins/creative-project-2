window.onload = function() {
    document.getElementById("playerSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("playerInput").value;
        if(value === "")
        return;
        console.log(value);

        
        const url = "https://www.balldontlie.io/api/v1/players?search=" + value;
        try {
            const response = await fetch(url);
            console.log("response: ", response);
            const json = await response.json();
            console.log("json: ", json);

            results = '';
            team = '';
            for(let i = 0; i < json.data.length; i++) {
                team = json.data[i].team.name;
                results += '<a class="playerContainer" style="background-image: url(images/png/' + team + '.png)" href="https://www.google.com/search?q='  + json.data[i].first_name + "+" + json.data[i].last_name + '\">'
                results += '<div>';
                results += "<h1>" + json.data[i].first_name + " " + json.data[i].last_name + "</h1>";
                results += "<h2>" + json.data[i].team.full_name + "</h2>";
                if(json.data[i].height_feet != null) {
                    results += "<p>" + json.data[i].height_feet + "'" + json.data[i].height_inches + "\"</p>";
                }
                results += "</div>";
                results += "</a>"
            }
            document.getElementById("playerReturn").innerHTML = results;
            console.log("html: ", results);
        }
        catch(err) {
            console.log(err);
        }
    })
}