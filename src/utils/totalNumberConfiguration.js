export function calculateTotal(number)
{
    if (number < 1000) {
        return "500+";
    }
    else if (number < 6000)
    {
        return "5000+";
    }
    else {
        return "10000+";
    }
}