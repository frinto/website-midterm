/**
 * Created by Huy Khoa Le on 2/21/2017.
 */

var radio_value;
var newRadio_value = 0;
var len;

var firstname;
var lastname;
var address;
var postalCode;
var phoneNum;
var email;

var typeOfObject = "";

function collectInfo()
{
    firstname = document.informationForm.firstname.value;
    lastname = document.informationForm.lastname.value;
    address = document.informationForm.address.value;
    postalCode = document.informationForm.code.value;
    phoneNum = document.informationForm.phoneNum.value;
    email = document.informationForm.email.value;

    radio_value = document.getElementsByName("typeOfPlanter");
    len = radio_value.length;

    for (i = 0; i < len; i++)
    {
        if (radio_value[i].checked)
        {
            newRadio_value = parseFloat(radio_value[i].value);
        }

        if (radio_value[0].checked)
        {
            document.getElementById("showMeForSquareRectangular").style.display = "block";
            typeOfObject = "Square/Rectangular Cubes";
        }

        if (radio_value[1].checked)
        {
            document.getElementById("showMeForFlatBottomCylinder").style.display = "block";
        }

        if (radio_value[2].checked)
        {
            document.getElementById("showMeForSphere").style.display = "block";
        }

        if (radio_value[3].checked)
        {
            document.getElementById("showMeForCone").style.display = "block";
        }
    }

}

function calculateInfoSqrRect()
{
    var lengthForSqrRectCubes = document.getElementById("lengthForSqrRect").value;
    var widthForSqrRectCubes = document.getElementById("widthForSqrRect").value;
    var heightForSqrRectCubes = document.getElementById("heightForSqrRect").value;

    var volume = lengthForSqrRectCubes * widthForSqrRectCubes * heightForSqrRectCubes;

    var total = newRadio_value * volume;

    document.getElementById("result").innerHTML = firstname + ", " + lastname + " <br>" + address + "<br>" + postalCode + "<br>" + phoneNum + "<br>" + email + "<br>" + "<br>" + typeOfObject + " <br>" + "Dimensions: " + lengthForSqrRectCubes + " * " + widthForSqrRectCubes + " * " + heightForSqrRectCubes + "<br>" + "volume: " + volume + "cm3" + "<br>" + "Total Cost: $" + total + "<br>";
}

function calculateInfoCyl()
{
    var radiusOfCyl = document.getElementById("radiusForCyl").value;
    var heightOfCyl = document.getElementById("heightForCyl").value;
    var pie = 3.14;

    var volume = pie * radiusOfCyl * radiusOfCyl * heightOfCyl;

    var total = newRadio_value * volume;

    document.getElementById("result").innerHTML = firstname + ", " + lastname + " <br>" + address + "<br>" + postalCode + "<br>" + phoneNum + "<br>" + email + "<br>" + "<br>" + typeOfObject + " <br>" + "Dimensions: " + pie + " * " + radiusOfCyl + " * " + radiusOfCyl + " * " + heightOfCyl + "<br>" + "volume: " + volume + "cm3" + "<br>" + "Total Cost: $" + total + "<br>";

}

function calculateInfoSphere()
{
    var radiusOfSphere = document.getElementById("radiusForSphere").value;

    var pie = 3.14;

    var volume = 1/2 * (4/3 * pie * radiusOfSphere * radiusOfSphere * radiusOfSphere);

    var total = newRadio_value * volume;

    document.getElementById("result").innerHTML = firstname + ", " + lastname + " <br>" + address + "<br>" + postalCode + "<br>" + phoneNum + "<br>" + email + "<br>" + "<br>" + typeOfObject + " <br>" + "Dimensions: " + "1/2" + " * " + "(" + "4/3" + " * " + pie + " * " + radiusOfSphere + " * " + radiusOfSphere + " * " + radiusOfSphere + ")" + "<br>" + "volume: " + volume + "cm3" + "<br>" + "Total Cost: $" + total + "<br>";


}

function calculateInfoCone()
{
    var heightOfCone = document.getElementById("heightForCone").value;
    var radius1 = document.getElementById("radius1ForCone").value;
    var radius2 = document.getElementById("radius2ForCone").value;

    var pie = 3.14;

    var volume = 1/3 * pie * (radius1 * radius1 + radius1 * radius2 + radius2 * radius2)* heightOfCone;

    var total = newRadio_value * volume;

    document.getElementById("result").innerHTML = firstname + ", " + lastname + " <br>" + address + "<br>" + postalCode + "<br>" + phoneNum + "<br>" + email + "<br>" + "<br>" + typeOfObject + " <br>" + "Dimensions: " + "1/3" + " * " + pie + " * " + "(" + radius1 + " * " + radius1 + " + " + radius1 + " * " + radius2 + " + " + radius2 + " * " + radius2 + ")" +  " * " + heightOfCone  + "<br>" + "volume: " + volume + "cm3" + "<br>" + "Total Cost: $" + total + "<br>";


}
