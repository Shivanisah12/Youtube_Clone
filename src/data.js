export const API_KEY = 'AIzaSyD06uALpLGGbwJjFRtG7JZ-_cTZHI5-LMI';

export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
        else if(value>=1000)
            {
                return Math.floor(value/1000)+"K"
            }
            else{
                return value;
            }
}