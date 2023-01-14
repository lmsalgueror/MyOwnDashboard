let currencyCode = " "

/*Promises*/
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beatles")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=7dc729ab65ef42dbabd7c842fc8a230b`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("time").innerHTML = `<h1 class="time">${data.timezone.current_time.slice(0,5)}</h1>`

        fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=202870e43527478ea7d00d4402ae9bc5&location=${data.timezone.name}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("date").innerHTML = `<p>${data.datetime.toString().split(" ",1)}</p>`
            })
        document.getElementById("flag").innerHTML = `<img src="${data.flag.png}" class="flag">`
        document.getElementById("location").innerHTML = `${data.city}, ${data.country}`
        currencyCode = data.currency.currency_code

        var myHeaders = new Headers();
        myHeaders.append("apikey", "aK6V4UBnbKrr08MokAZ5MWksgqAitLJ4");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyCode}&from=USD&amount=1`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                document.getElementById("dolar").innerHTML = `${result.result.toString().substring(0,4)} ${currencyCode}`
            })
            .catch(error => console.log('error', error));

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyCode}&from=EUR&amount=1`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                document.getElementById("euro").innerHTML = `${result.result.toString().substring(0,4)} ${currencyCode}`
            })
            .catch(error => console.log('error', error));

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyCode}&from=CAD&amount=1`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                document.getElementById("can-dol").innerHTML = `${result.result.toString().substring(0,4)} ${currencyCode}`
            })
            .catch(error => console.log('error', error));
    });