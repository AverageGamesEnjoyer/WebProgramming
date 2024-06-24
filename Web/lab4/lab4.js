// Завдання 1
function task1() {
    let fruits = ["яблуко", "банан", "груша", "апельсин"];
    fruits.pop();
    console.log("Завдання 1.1:", fruits);
    fruits.unshift("ананас");
    console.log("Завдання 1.2:", fruits);
    fruits.sort().reverse();
    console.log("Завдання 1.3:", fruits);
    let appleIndex = fruits.indexOf("яблуко");
    console.log("Завдання 1.4:", appleIndex);
}

// Завдання 2
function task2() {
    let colors = ["червоний", "зелений", "синій", "жовтий"];
    let longestColor = colors.reduce((a, b) => a.length > b.length ? a : b);
    let shortestColor = colors.reduce((a, b) => a.length < b.length ? a : b);
    console.log("Завдання 2.1:", longestColor, shortestColor);
    colors = colors.filter(color => color.includes("синій"));
    let colorString = colors.join(", ");
    console.log("Завдання 2.2:", colorString);
}

// Завдання 3
function task3() {
    let employees = [
        { name: "Іван", age: 30, position: "розробник" },
        { name: "Петро", age: 25, position: "дизайнер" },
        { name: "Ольга", age: 28, position: "тестувальник" }
    ];
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Завдання 3.1:", employees);
    let developers = employees.filter(employee => employee.position === "розробник");
    console.log("Завдання 3.2:", developers);
    employees = employees.filter(employee => employee.age !== 25);
    console.log("Завдання 3.3:", employees);
    employees.push({ name: "Анна", age: 22, position: "менеджер" });
    console.log("Завдання 3.4:", employees);
}

// Завдання 4
function task4() {
    let students = [
        { name: "Олексій", age: 21, course: 3 },
        { name: "Марія", age: 20, course: 2 },
        { name: "Олена", age: 22, course: 4 }
    ];
    students = students.filter(student => student.name !== "Олексій");
    students.push({ name: "Дмитро", age: 23, course: 1 });
    students.sort((a, b) => b.age - a.age);
    console.log("Завдання 4.1:", students);
    let thirdYearStudent = students.find(student => student.course === 3);
    console.log("Завдання 4.2:", thirdYearStudent);
}

// Завдання 5
function task5() {
    let numbers = [1, 2, 3, 4, 5];
    let squaredNumbers = numbers.map(num => num ** 2);
    console.log("Завдання 5.1:", squaredNumbers);
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Завдання 5.2:", evenNumbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Завдання 5.3:", sum);
    let newNumbers = [6, 7, 8, 9, 10];
    numbers = numbers.concat(newNumbers);
    console.log("Завдання 5.4:", numbers);
    numbers.splice(0, 3);
    console.log("Завдання 5.5:", numbers);
}

// Завдання 6
function libraryManagement() {
    let library = [
        { title: "Книга 1", author: "Автор 1", genre: "Фантастика", pages: 200, isAvailable: true },
        { title: "Книга 2", author: "Автор 2", genre: "Детектив", pages: 300, isAvailable: false }
    ];

    function addBook(title, author, genre, pages) {
        library.push({ title, author, genre, pages, isAvailable: true });
    }

    function removeBook(title) {
        library = library.filter(book => book.title !== title);
    }

    function findBooksByAuthor(author) {
        return library.filter(book => book.author === author);
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = library.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
        }
    }

    function sortBooksByPages() {
        library.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        let totalBooks = library.length;
        let availableBooks = library.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let avgPages = library.reduce((acc, book) => acc + book.pages, 0) / totalBooks;
        return { totalBooks, availableBooks, borrowedBooks, avgPages };
    }

    console.log("Завдання 6:", library);
    addBook("Книга 3", "Автор 3", "Роман", 150);
    removeBook("Книга 1");
    console.log("Книги автора 'Автор 2':", findBooksByAuthor("Автор 2"));
    toggleBookAvailability("Книга 2", true);
    sortBooksByPages();
    console.log("Статистика книг:", getBooksStatistics());
}

// Завдання 7
function task7() {
    let student = {
        name: "Андрій",
        age: 21,
        course: 3
    };
    student.subjects = ["математика", "фізика", "інформатика"];
    delete student.age;
    console.log("Завдання 7:", student);
}

// Виклик всіх завдань
task1();
task2();
task3();
task4();
task5();
libraryManagement();
task7();