package main

import "fmt"

// jwtToken := 300000  Not allowed in global var should be used

const LoginToken string = "ghabbhjd" //equivalent to pulic var
//using first Letter Capital

//public token

func main() {
	var username string = "Kasim"
	fmt.Println(username)
	fmt.Printf("Variables is of type: %T \n", username)

	var isLOggedIN bool = false
	fmt.Println(isLOggedIN)
	fmt.Printf("Variables is of type: %T \n", isLOggedIN)

	var smallVal uint8 = 255
	fmt.Println(smallVal)
	fmt.Printf("Variables is of type: %T \n", smallVal)

	var smallFLoat float64 = 255.2545455454455555
	fmt.Println(smallFLoat)
	fmt.Printf("Variables is of type: %T \n", smallFLoat)

	//default values

	var anotherVariable int
	fmt.Println(anotherVariable)
	fmt.Printf("Vraiable is of type : %T \n", anotherVariable)

	//implicit type

	var website = "www.google.com"
	fmt.Println(website)

	//no var style
	numberOFUser := 300000.2
	fmt.Println(numberOFUser)

	fmt.Println(LoginToken)
	fmt.Printf("The Variable is of type: %T \n ", LoginToken)

}
