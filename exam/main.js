let baseURl = ' http://localhost:5173/'
// import axios from "axios"
let form = document.forms.add
let btn_all = document.querySelector('btn-all-people')
let btn_decrease = document.querySelector('.btn-decrease')
let btn_p = document.querySelector('.btn-p')
let premioum = document.querySelector('.premioum')
let ul = document.querySelector('.ul')
let allEmployes = document.querySelector('.allEmployes')
let inp_search = document.querySelector('.inpSearch')



let arrs = []

form.onsubmit = (event) => {
  event.preventDefault()

  let users = {
    id: Math.random(),
    increase: false,
    rise: false
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    users[key] = value
  })

  if (users.name && users.price) {
    axios.post(baseURl, users)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          console.log(res);
        } else {
          alert('Что-то пошло не так!!')
        }
      })
  }
}

axios.get(baseURl)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      reload(res.data)
      console.log(res.data)
      arrs = res.data
    }
  })
  .catch(err => console.log(err))



function employyes () {
  axios.get(baseURl)
    .then(res => {
      reload(res.data)
      h1.innerHTML = `Общее число сотрудников: ${res.data.length}`
    })
}
employyes()


axios.get(baseURl)
  .then(res => {
    inp_search.onkeyup = () => {
      let clear = res.data.filter(item => item.name.toLowerCase().includes(inp_search.value.toLowerCase()))
      reload(clear)
    }
  })

btn_all.onclick = () => {
  reload(arrs)
}

btn_decrease.onclick = () => {
  let filtered = arrs.filter(item => item.rise)
  reload(filtered)
}

btn_p.onclick = () => {
  let filtered = arrs.filter(item => item.price > 1000)
  reload(filtered)
}



function reload(arr) {
  ul.innerHTML = ''
  let countPremioum = 0           
  for (let item of arr) {
  
    let li = document.createElement('li')
    let h4 = document.createElement('h4')
    let div = document.createElement('div')
    let input = document.createElement('input')
    let cookie = document.createElement('button')
    let del = document.createElement('button')
    let cookie_img = document.createElement('img')
    let del_img = document.createElement('img')
    let star_img = document.createElement('img')
 
    div.classList.add('all-va')
    cookie_img.classList.add('edite')
    del.classList.add('delete')
    star_img.classList.add('star')
   
    cookie_img.src = `./img/icons8-повышение-48.png`
    del_img.src = `./img/icons8-remove-48.png`
    star_img.src = `./img/icons8-звезда-с-заливкой-48.png`
    h4.innerHTML = item.name
    input.value = item.price
  
    cookie_img.append(cookie_img)
    del.append(del_img)
    div.append(input, cookie_img, del, star_img)
    li.append(h4, div)
    ul.prepend(li)
    
    h4.onclick = () => {
      let id = item.id
      axios.put(baseURl + `/${id}`, {rise: true})
        .then(res)
    }

    
del.onclick = (event) => {
  event.preventDefault()
  let id = item.id
  axios.delete(baseURl + `/${id}`)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        employyes()
      }
    })
}
    premioum.innerHTML = `Премию получат: ${countPremioum}`
  }
}

