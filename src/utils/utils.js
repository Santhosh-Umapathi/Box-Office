
//Converting mins to HH:mm
export const timeConvert = (num) =>
{ 
    const hours = Math.floor(num / 60);  
    const minutes = num % 60;
    return hours+"h " + minutes+"m";         
}

//Handling Genres array with "/"
export const genreHandler = (array) =>
{
    return array.map((item, index) => 
    {
        let i
        if(index+1 !== array.length)
            i = item.name+"/"
        else
            i = item.name

        return i
    })
}