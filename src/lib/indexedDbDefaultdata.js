export const majorsData = [
  { major_name: "Gestion" },
  { major_name: "Informatique" },
  { major_name: "Ingénierie Civil" },
];
//courses
export const coursesData = [
  { course_name: " Comptabilité", major_id: 1 },
  { course_name: "Éthique des affaires", major_id: 1 },
  { course_name: "Comportement Organisationnel", major_id: 1 },
  { course_name: "Gestion Stratégique", major_id: 1 },
  { course_name: "Gestion des Opérations", major_id: 1 },

  { course_name: "Algorithmes", major_id: 2 },
  { course_name: "Structures de données", major_id: 2 },
  { course_name: "Réseaux informatiques", major_id: 2 },
  { course_name: "Systèmes d'exploitation", major_id: 2 },

  { course_name: "Analyse structurelle", major_id: 3 },
  { course_name: "Mécanique fluide", major_id: 3 },
  { course_name: "Ingénierie de la conduite", major_id: 3 },
  { course_name: "Ingénierie environnementale", major_id: 3 },

  { course_name: "Français" },
  { course_name: "Espagnole" },
  { course_name: "Mandarin" },
];

//groups
export const groupsData = [
  { group_size: 30, group_name: "Gestion L1 A", major_id: 1 },
  { group_size: 30, group_name: "Gestion L1 B", major_id: 1 },
  { group_size: 30, group_name: "Informatique L1", major_id: 2 },
  { group_size: 30, group_name: "Informatique L2", major_id: 2 },
  { group_size: 30, group_name: "Ingénierie Civil L1", major_id: 3 },
  { group_size: 30, group_name: "Ingénierie Civil L2", major_id: 3 },
];
//teachers
export const teachersData = [
  {
    teacher_name: "John Doe",
    teacher_title: "Docteur en Sciences de l'Éducation",
    teacher_profil_pic: "john_doe.png",
  },
  {
    teacher_name: "RAFANOMEZANA Celestin",
    teacher_title: "Professeur en Genie Mecanique",
    teacher_profil_pic: "jane_smith.png",
  },
  {
    teacher_name: "FEHIZORO Fanaperana",
    teacher_title: "Docteur en Comptabilité",
    teacher_profil_pic: "emily_johnson.png",
  },
  {
    teacher_name: "ANDRIANINA Mahefa",
    teacher_title: "Docteur en Science Cognitive",
    teacher_profil_pic: "michael_brown.png",
  },
  {
    teacher_name: "Jessica Mickael",
    teacher_title: "Docteur en Genie civil",
    teacher_profil_pic: "jessica_davis.png",
  },
  {
    teacher_name: "RAVAOARISOA Finaritra",
    teacher_title: "Master en Culture et Linguistique",
    teacher_profil_pic: "daniel_miller.png",
  },
];

//timeslots
export const timeslotsData = [
  {
    timeslot_value: "08:00 - 10:00",
  },
  {
    timeslot_value: "10:00 - 12:00",
  },
  {
    timeslot_value: "13:00 - 15:00",
  },
  {
    timeslot_value: "15:00 - 17:00",
  },
];

//classrooms
export const roomsData = [
  {
    room_name: "Room 101",
    room_capacity: 30,
  },
  {
    room_name: "Room 102",
    room_capacity: 25,
  },
  {
    room_name: "Room 103",
    room_capacity: 20,
  },
  {
    room_name: "Room 201",
    room_capacity: 30,
  },
  {
    room_name: "Room 202",
    room_capacity: 25,
  },
  {
    room_name: "Computer Lab",
    room_capacity: 35,
  },
];

//core_class_refs
export const core_class_refsData = [
  { core_class_ref_name: "ccr 1" },
  { core_class_ref_name: "ccr 2" },
  { core_class_ref_name: "ccr 3" },
  { core_class_ref_name: "ccr 4" },
];

// //students
// export const studentsData = [
//   { student_name: "Alex Johnson", group_id: 1 },
//   { student_name: "Brittany Smith", group_id: 2 },
//   { student_name: "Charles Brown", group_id: 3 },
//   { student_name: "Danielle Miller", group_id: 4 },
//   { student_name: "Ethan Williams", group_id: 5 },
//   { student_name: "Fiona Jones", group_id: 6 },
// ];

//teacher_availabilities
export const teacherAvailabilitiesData = [
  {
    availability_date: new Date("2022-09-01T08:00:00"),
    teacher_id: 1,
    timeslot_id: 1,
  },
  {
    availability_date: new Date("2022-09-01T10:00:00"),
    teacher_id: 1,
    timeslot_id: 2,
  },
  {
    availability_date: new Date("2022-09-02T01:00:00"),
    teacher_id: 2,
    timeslot_id: 3,
  },
  {
    availability_date: new Date("2022-09-02T03:00:00"),
    teacher_id: 2,
    timeslot_id: 4,
  },
];

//activities
