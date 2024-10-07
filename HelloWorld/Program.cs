using System;

namespace HelloWorld
{
	class Program 
	{
		static void Main(string[] args)
		{
			int biggerNumber = 12;
			int smallerNumber = 5;
			Console.WriteLine("First condition");
			if(biggerNumber != smallerNumber) {
				Console.WriteLine(biggerNumber + " is not equal to " + smallerNumber);
			} else {
				Console.WriteLine(" Else ");
			}

			Console.WriteLine("3rd condition");
			if(biggerNumber > smallerNumber){
				Console.WriteLine(biggerNumber + " is greater than " + smallerNumber);
			}else if(biggerNumber != smallerNumber){
				Console.WriteLine(biggerNumber + "is not equal to " + smallerNumber);
			}
			else{
				Console.WriteLine("Else");
			}
		}
	}
}
// See https://aka.ms/new-console-template for more information
