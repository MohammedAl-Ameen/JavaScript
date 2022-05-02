let grade = window. prompt("Enter your grade: ");

let temp = grade % 10;
grade = grade - temp;


switch (grade) {

	case 90:
		document.write("A");
		break;

	case 80:
		document.write("B");
		break;

	case 70:
		document.write("C");
		break;

	case 60:
		document.write("D");
		break;

	case 50:
	document.write("E");
	break;

	case 40:
	document.write("F");
	break;

	case 30:
		document.write("F");
	break;


	case 20:
		document.write("F");
	break;


	case 10:
		document.write("F");
	break;


	case 00:
		document.write("F");
	break;




	default:
		document.write("wrong input");
}