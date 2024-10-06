using System;

namespace HelloWorld
{
	class Program 
	{
		static void Main(string[] args)
		{
			int ourNumber;
			ourNumber = 2;
			Console.WriteLine(ourNumber);

			ourNumber = 10;
			Console.WriteLine(ourNumber);

			ourNumber = 2 + 12;
			Console.WriteLine(ourNumber);

			double decimalNumber;
			decimalNumber = 10.15;
			Console.WriteLine(decimalNumber);

			int number = 5;
			char myCharacter = 'S';
			myCharacter += (char) 1;
			Console.WriteLine(myCharacter);

			string myName= "Ready";
			Console.WriteLine(myName);

			int newVariable = ourNumber - number;
			Console.WriteLine(newVariable);

			Boolean temp = true;
			Console.WriteLine(temp);
		}
	}
}
// See https://aka.ms/new-console-template for more information
