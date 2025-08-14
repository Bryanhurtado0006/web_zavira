import React from 'react';

const Estudiantes: React.FC = () => {
  return (
    <div className="text-white text-xl font-semibold">
      <div className="bg-gray-100 font-sans">
        {/* Header */}
<header className="bg-blue-600 text-white shadow-lg">
  <div className="container mx-auto px-4 py-6">
    <nav>
      <ul className="flex justify-between items-center gap-20">  {/* gap-4 controla el espacio entre elementos */}
        <li>
          <a href="#Grades" className="hover:text-blue-200 transition">Grados</a>
        </li>
        <li className="flex items-center gap-4">  {/* gap-4 ajusta el espacio alrededor de "|" */}
          <span>|</span>
          <a href="#Curso" className="hover:text-blue-200 transition">Cursos</a>
          <span>|</span>
        </li>
        <li>
          <a href="#Jornada" className="hover:text-blue-200 transition">Jornada</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

        {/* Main */}
        <main className="container mx-auto px-4 py-8">
          {/* Student List */}
          <section id="students" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Student List</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Grade</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">A</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition" aria-label="Delete John Doe's data">Delete</button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">B</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition" aria-label="Delete Jane Smith's data">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" aria-label="Convert student list to PDF">Convert to PDF</button>
              <select className="border rounded px-2 py-1" aria-label="Sort by subject">
                <option>Sort by Subject</option>
                <option>Math</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>
          </section>

          {/* Statistics */}
          <section id="statistics" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Average Grade</h3>
                  <p className="text-3xl font-bold text-blue-600">B+</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Total Students</h3>
                  <p className="text-3xl font-bold text-blue-600">150</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Subjects Offered</h3>
                  <p className="text-3xl font-bold text-blue-600">10</p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration */}
          <section id="registration" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Student Registration</h2>
            <form className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required aria-required="true" />
              </div>
              <div className="mb-4">
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                <input type="text" id="grade" name="grade" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required aria-required="true" />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Register Student</button>
            </form>
          </section>

          {/* Add Subject */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Add New Subject</h2>
            <form className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject Name</label>
                <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required aria-required="true" />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Add Subject</button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 School Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>

      Lista y gestión de estudiantes registrados.
    </div>
  );
};

export default Estudiantes;
