
(function () {
    const countdownDiv = document.getElementById("count-down-div")
    const endDiv = document.getElementById("end-div")
    const value = document.getElementById('count-value')
    setTimeout(() => {
        value.innerHTML = parseInt(value.innerHTML) + 1
        setTimeout(() => {
            value.innerHTML = parseInt(value.innerHTML) + 1
            setTimeout(() => {
                value.innerHTML = parseInt(value.innerHTML) + 1
                setTimeout(() => {
                    value.innerHTML = parseInt(value.innerHTML) + 1
                    setTimeout(() => {
                        value.innerHTML = parseInt(value.innerHTML) + 1
    
                        setTimeout(() => {
                            value.innerHTML = parseInt(value.innerHTML) + 1
                            setTimeout(() => {
                                value.innerHTML = parseInt(value.innerHTML) + 1
                                setTimeout(() => {
                                    value.innerHTML = parseInt(value.innerHTML) + 1
                                    setTimeout(() => {
                                        value.innerHTML = parseInt(value.innerHTML) + 1
                                        setTimeout(() => {
                                            countdownDiv.style.display = 'none'
                                            endDiv.style.display = 'flex'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}())
