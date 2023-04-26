document.querySelector('button').addEventListener('click', submit)


async function submit() {
    const userInput = document.querySelector('input').value
    const res = await fetch(`http://localhost:3000/api/${userInput}`)
    const data = await res.json()
    console.log(data)
    document.querySelector('h2').innerText = data.age
}