package main

import (
	"fmt"
	"syscall/js"
)

func sayHi(args []js.Value) {
	fmt.Println("Hi!");
}

func registerCallbacks() {
	js.Global().Set("sayHi", js.NewCallback(sayHi))
}

func main() {
	c := make(chan struct{}, 0)

	registerCallbacks()
	<-c
}

