package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "Kushamadin user input"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the rating for our food:")

	//comma ok || err ok
	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for rating, ", input)
	fmt.Printf("TYpe of this rating is %T", input)
}
