const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gmunoz:QkBRiJyFdjM9M5qw@cluster76.qv6fa55.mongodb.net/?appName=Cluster76')

const User = mongoose.model('User',{
    username: String,
    edad: Number,
})

const crear = async() => {
    const user = new User({ username:'capibara triste', edad: 25 })
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'capibara feliz' })
    console.log(user)
}

//buscar ()

const buscarUno = async () => {
    const user =await User.findOne({ username: 'capibara feliz' })
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'capibara feliz' })
    console.log(user)
    user.edad = 30
    await user.save()
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'capibara triste' })
    console.log(user)
    if (user) {
       await user.deleteOne() 
    }
   
}

eliminar()