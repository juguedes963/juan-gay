function printer(){
    const name= document.forms["form"]["nome_cliente"].value
    const money_origin= document.forms["form"]["money_origin"].value
    const money_destin= document.forms["form"]["money_destin"].value
    const dateOperation= document.forms["form"]["dateOperation"].value
    const valueOrigin= document.forms["form"]["valueOrigin"].value
    const valueConver= document.forms["form"]["valueConver"].value
    const taxa= document.forms["form"]["taxa"].value
    const data={
        name,
        money_origin,
        money_destin,
        dateOperation,
        valueOrigin,
        valueConver,
        taxa
    }
    //use a api  https://docs.awesomeapi.com.br/api-de-moedas para efetuar os calculos

    console.log(data)
}