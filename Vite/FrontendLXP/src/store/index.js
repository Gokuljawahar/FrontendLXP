import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from '../reducers/Admin/courseReducer.js';
import apiMiddleware from '../middleware/Admin/apiMiddleware.js';
import ForgotPasswordreducer from '../reducers/Admin/ForgotPasswordReducer.js';
import userReducer from '../reducers/Admin/loginReducer.js';
import AllcourseReducer from '../reducers/Admin/AllcourseReducer.js';
import apiviewallcourse from '../middleware/Admin/apiviewallcourse.js';
import loginUser from '../middleware/Admin/apiLogin.js';
import apiDeletecourse from '../middleware/Admin/apiDeletecourse.js';
import DeletecourseReducer from '../reducers/Admin/DeletecourseReducer.js';
import UpdateCourse from '../middleware/Admin/apiUpdatecourse.js';
import courseupdateReducer from '../reducers/Admin/Updatecourse.js';
import AllLearnerReducer from '../reducers/Admin/AllLearnerReducer.js';
import apiViewAllLearners from '../middleware/Admin/apiViewAllLearners.js';
import ProfileCardReducer from '../reducers/Admin/IndividualLearnerReducer.js';
import GetProfileCard from '../middleware/Admin/apiIndividualLearners.js';
import ProfileCoursesReducer from '../reducers/Admin/ProfileCoursesReducers.js';
import GetProfileCourses from '../middleware/Admin/apiProfileCourses.jsx';
import LastEnrolledCourseReducer from '../reducers/Admin/LastEnrolledCourseReducer.js';
import LastEnrolledCourse from '../middleware/Admin/apiLastEnrolledCourse.jsx';
import EnableDisableCourseReducer from '../reducers/Admin/EnableDisbaleCourseReducer.js';
import EnableDisableCourse from '../middleware/Admin/apiEnableDisbaleCourse.js';
import fetchDataReducer from '../reducers/Admin/DashboardReducer.js';
import FetchdashboardData from '../middleware/Admin/apiDashboard.js';
import emailReducer from '../reducers/Admin/EmailReducers.js';
import emailMiddleware from '../middleware/Admin/Emailapi.js';

import ApiForgotpassword from '../middleware/Admin/ApiForgotpassword.js';
import forgotPasswordReducer from '../reducers/Admin/ForgotPasswordReducer.js';

import ApiViewlearnersReport from '../middleware/Admin/ApiViewlearnersReport.js';
import ViewLearnersreportsReducer from '../reducers/Admin/ViewLearnersreportsReducer.js';
import ApiViewCourseReport from '../middleware/Admin/ApiViewCourseReport.js';
import ViewCoursereportReducers from '../reducers/Admin/ViewCoursereportReducers.js';
import QuizReportReducer from '../reducers/Admin/ViewQuizReportReducers.js';
import ApiViewQuizReport from '../middleware/Admin/ApiViewQuizReport.js';
import ApiDashboardEnrollmentcourseBarchart from '../middleware/Admin/ApiDashboardEnrollmentcourseBarchart.js';
import DashboardEnrollmentcourseBarchartReducer from '../reducers/Admin/DashboardEnrollmentcourseBarchartReducer.js'

// import LearnerPostEnrollReducer from '../components/LearnerComponent/LearnerCourse'


import LearnerGetCourseReducer from "../reducers/LearnerReducer/LearnerGetCourseReducer.js";
import LearnerGetCourse from '../middleware/LearnerMiddleware/LearnerGetCourse.js';
import LearnerPostEnrollReducer from "../reducers/LearnerReducer/LearnerPostEnrollReducer.js";
import LearnerPostEnroll from "../middleware/LearnerMiddleware/LearnerPostEnroll.js";
import enrollCourseApi from "../middleware/LearnerMiddleware/EnrollCourseApi.jsx";
import enrollmentReducer from "../reducers/LearnerReducer/EnrollmentReducer.jsx";
import fetchPdfReducer from '../reducers/LearnerReducer/FetchPdfReducer.js';
import addWatchTimeReducer from '../reducers/LearnerReducer/WatchTimeReducer.js';
import watchTimeApi from '../middleware/LearnerMiddleware/WatchTimeMiddleware.js';

import FetchRegisterReducer from '../reducers/LearnerReducer/FetchRegisterReducer.js';
import { FetchRegisterApi } from '../middleware/LearnerMiddleware/FetchRegisterApi.js';

import GetUserProfileReducer from '../reducers/LearnerReducer/GetUserProfileReducer.js';
import UpdateUserProfileReducer from '../reducers/LearnerReducer/UpdateUserProfileReducer.js';
import fetchProfileData from '../middleware/LearnerMiddleware/GetUserProfileMiddleware.js';
import { updateUserData } from '../middleware/LearnerMiddleware/UpdateUserProfileMiddleware.js';
import { RegisterApi } from '../middleware/LearnerMiddleware/RegisterApi.js';
import fetchEmailApi from '../middleware/LearnerMiddleware/FetchEmailApi.js';
import OTPReducer from '../reducers/LearnerReducer/OTPReducer.js';
import PasswordChangeReducer from '../reducers/LearnerReducer/PasswordChangeReducer.js';
import updatePasswordApi from '../middleware/LearnerMiddleware/PasswordChangeApi.js';
import VerifyEmailApi from '../middleware/LearnerMiddleware/VerifyEmailApi.js';
import LearnerReducer from '../reducers/LearnerReducer/Registerreducer.js';
import fetchEmailReducer from '../reducers/LearnerReducer/FetchEmailReducer.js'

import quizPassedUserReducer from '../reducers/Admin/QuizPassedUserReducer.js';
import ApiQuizPassedUsers from '../middleware/Admin/Reports/ApiQuizPassedUsers.js';

import quizFailedUserReducer from '../reducers/Admin/QuizFailedUserReducer.js';
import ApiQuizFailedUsers from '../middleware/Admin/Reports/ApiQuizFaliedUsers.jsx';

import EnrollCoursePassedLearnerReducer from '../reducers/Admin/EnrollCoursePassedLearnersReducer.js';
import EnrollCoursePassedLearner from "../middleware/Admin/enrollCoursePassedLearners.js";
import EnrollCourseProgressLearnerReducer from '../reducers/Admin/EnrolledCourseProgressLearnerReducer.js';
import EnrollCourseProgressLearner from '../middleware/Admin/enrolledCourseProgressLearners.js';

import EnrollCourseLearner from '../reducers/Admin/EnrollCourseLearner.js';
import EnrollCourseLearners from '../middleware/Admin/enrollCourseLearner.js';
import EnrollmentReportReducer from '../reducers/Admin/ViewEnrollmentReducer.js';
import ApiViewEnrollmentReport from '../middleware/Admin/apiEnrollmentReport.js';



// sanjai-5
import ApiDashboardTopLearners from '../middleware/Admin/ApiDashboardTopLearners.js';
import DashboardTopLearnersReducer from '../reducers/Admin/DashboardTopLearnersReducer.js';
import ApiDashboardHighestEnrolledCourse from '../middleware/Admin/ApiDashboardHighestEnrolledCourse.js';
import DashboardHighestEnrolledCourseReducer from '../reducers/Admin/DashboardHighestEnrolledCourseReducer.js';
import ApiRecentFeedbackresponse from '../middleware/Admin/ApiRecentFeedbackresponse.js';
import DashboardRecentFeedbackReducer from '../reducers/Admin/DashboardRecentFeedbackReducer.js';

//quizmodule
import quizIdReducer from "../reducers/Quiz And Feedback Module/Admin/FetchQuizIdReducer.js";

import {
  DeleteQuizQuestionsApi,
  UpdateQuizQuestionsApi,
} from "../middleware/Quiz And Feedback Module/Admin/QuestionApi.js";
import { CreateQuizApi } from "../middleware/Quiz And Feedback Module/Admin/CreateQuizApi.js";
import { FetchQuizById } from "../middleware/Quiz And Feedback Module/Admin/FetchQuizIdApi.js";
import fetchQuizQuestionsReducer from "../reducers/Quiz And Feedback Module/Admin/FetchQuizQuestionsReducer.js";
import { FetchQuizQuestionsApi } from "../middleware/Quiz And Feedback Module/Admin/FetchQuizQuestionsApi.js";
import deleteQuizQuestionsReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteQuizQuestionReducer.js";
import updateQuizQuestionReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateQuizQuestionReducer.js";
import createQuizReducer from "../reducers/Quiz And Feedback Module/Admin/CreateQuizReducer.js";
import DeleteQuizFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/DeleteQuizFeedbackApi.js";
import UpdateQuizFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/UpdateQuizFeedbackApi.js";
import DeleteTopicFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/DeleteTopicFeedbackApi.js";
import UpdateTopicFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/UpdateTopicFeedbackApi.js";
import UpdateQuizFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateQuizFeedbackReducer.js";
import DeleteQuizFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteQuizFeedbackReducer.js";
import DeleteTopicFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteTopicFeedbackReducer.js";
import UpdateTopicFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateTopicFeedbackReducer.js";
import editQuizReducer from "../reducers/Quiz And Feedback Module/Admin/EditQuizReducer.js";
import { PutQuizDetails } from "../middleware/Quiz And Feedback Module/Admin/EditQuizApi.js";
// quiz-learnerflow
import AttemptQuizReducer from "../reducers/Quiz And Feedback Module/Learner/AttemptQuizReducer.js";
import QuizInstructionReducer from "../reducers/Quiz And Feedback Module/Learner/QuizInstructionReducer.js";
import { QuizInstructionApi } from "../middleware/Quiz And Feedback Module/Learner/QuizInstructionApi.js";
import LearnerAttemptQuizIdReducer from "../reducers/Quiz And Feedback Module/Learner/LearnerAttemptQuizIdReducer.js";
import LearnerAttemptQuizIdApi from "../middleware/Quiz And Feedback Module/Learner/LearnerAttemptQuizIdApi.js";
import GetLearnerIDReducer from "../reducers/Quiz And Feedback Module/Learner/GetLearnerIDReducer.js";
import GetLearnerIDApi from "../middleware/Quiz And Feedback Module/Learner/GetLearnerIDApi.js";
import reviewReducer from "../reducers/Quiz And Feedback Module/Learner/ReviewReducer.js";
import reviewApi from "../middleware/Quiz And Feedback Module/Learner/ReviewApi.js";
import { fetchQuestionsMiddleware } from "../middleware/Quiz And Feedback Module/Learner/AttemptQuizApi.js";
import SelectAnswerReducer from "../reducers/Quiz And Feedback Module/Learner/SelectAnswerReducer.js";
import submitAttemptReducer from "../reducers/Quiz And Feedback Module/Learner/SubmitAttemptReducer.js";
import { selectAnswerMiddleware } from "../middleware/Quiz And Feedback Module/Learner/SelectAnswerApi.js";
import submitAttemptMiddleware from "../middleware/Quiz And Feedback Module/Learner/SubmitAttemptMiddleware.js";
import LearnerScorePageReducer from "../reducers/Quiz And Feedback Module/Learner/LearnerScorePageReducer.js";
import LearnerScorePageApi from "../middleware/Quiz And Feedback Module/Learner/LearnerScorePageApi.js";
import FetchTopicFeedbackQuestionReducer from "../reducers/Quiz And Feedback Module/Learner/FetchTopicFeedbackQuestionReducer.js";
import { FetchTopicFeedbackQuestionApi } from "../middleware/Quiz And Feedback Module/Learner/FetchTopicFeedbackQuestionApi.js";
import TopicFeedbackResponseReducer from "../reducers/Quiz And Feedback Module/Learner/TopicFeedbackResponseReducer.js";
import { TopicFeedbackResponseApi } from "../middleware/Quiz And Feedback Module/Learner/TopicFeedbackResponseApi.js";
import QuizFeedbackResponseReducer from "../reducers/Quiz And Feedback Module/Learner/QuizFeedbackResponseReducer.js";
import { QuizFeedbackResponseApi } from "../middleware/Quiz And Feedback Module/Learner/QuizFeedbackResponseApi.js";
import FetchQuizFeedbackQuestionReducer from '../reducers/Quiz And Feedback Module/Learner/FetchQuizFeedbackQuestionReducer.js';
import { FetchQuizFeedbackQuestionApi } from '../middleware/Quiz And Feedback Module/Learner/FetchQuizFeedbackQuestionApi.js';




// COURSE TEAMS 

import DeleteCourseFeedbackApi from "../middleware/Course/Course/DeleteCourseFeedbackApi.js";
import UpdateCourseFeedbackApi from "../middleware/Course/Course/UpdateCourseFeedbackApi.js";
import DeleteCourseFeedbackReducer from "../reducers/Course/Course/DeleteCourseFeedbackReducer.js";

import UpdateCourseFeedbackReducer from "../reducers/Course/Course/UpdateCourseFeedbackReducer.js";
// import fetchTopicsReducer from '../../reducer/Course/CTopic/FetchTopicReducer';
import fetchTopicsReducer from '../reducers/Course/Topic/FetchTopicReducer.jsx'

import fetchTopicsApi from '../middleware/Course/Topic/FetchTopicMiddleware.jsx';
// import fetchEditTopicsApi from '../../middleware/Course/Topic/FetchEditTopicMiddleware';
import fetchEditTopicsApi from '../middleware/Course/Topic/FetchEditTopicMiddleware.jsx'

// import fetchEditTopicsReducer from '../reducers/Course/Topic/FetchEditTopicsReducer';

import fetchEditTopicsReducer from '../reducers/Course/Topic/FetchEditTopicsReducer.jsx'
// import updateTopicReducer from '../reducers/Course/Topic/UpdateTopicsReducer'
import updateTopicReducer from '../reducers/Course/Topic/UpdateTopicsReducer.jsx';

import updateTopicsApi from '../middleware/Course/Topic/UpdateTopicsMiddleware.jsx';

// import deleteTopicReducer from '../reducers/Course/Topic/DeleteTopicsReducer';
import deleteTopicReducer from '../reducers/Course/Topic/DeleteTopicsReducer.jsx'

import deleteTopic from '../middleware/Course/Topic/DeleteTopicMiddleware.jsx';
import addContent from '../middleware/Course/Material/AddContentMiddleware.jsx';

import AddMaterialReducer from '../reducers/Course/Material/AddContentReducer.jsx';


import fetchMaterialTypeReducer from '../reducers/Course/Material/FetchMaterialTypeReducer.jsx';
import fetchMaterialTypeApi from '../middleware/Course/Material/FetchMaterialTypeMiddleware.jsx';

import fetchContentApi from '../middleware/Course/Material/FetchContentMiddleware.jsx';
import fetchContentReducer from '../reducers/Course/Material/FetchContentReducer.jsx';
import deleteContentReducer from '../reducers/Course/Material/DeleteContentReducer.jsx';
import deleteContentApi from '../middleware/Course/Material/DeleteContentMiddleware.jsx';
import fetchIndividualContentReducer from '../reducers/Course/Material/FetchIndividualContentByIdReducer.jsx';
import fetchIndividualContentApi from '../middleware/Course/Material/FetchIndividualContentByIdMiddleware.jsx';
import updateContentReducer from '../reducers/Course/Material/UpdateContentReducer.jsx';
import updateContentApi from '../middleware/Course/Material/UpdateContentMiddleware.jsx';
import fetchContentUrlReducer from '../reducers/Course/Material/FetchContentUrlReducer.jsx';
import fetchContentUrlApi from '../middleware/Course/Material/FetchContentUrlMiddleware.jsx';
import addCourse from '../middleware/Course/Course/AddCourse.jsx';
import fetchcategoryApi from '../middleware/Course/Category/FetchCategoryMiddleware.jsx';
import fetchlevelApi from '../middleware/Course/Level/FetchLevelMiddleware.jsx';
import fetchCategoryReducer from '../reducers/Course/Category/FetchCategoryReducer.jsx';
import fetchLevelReducer from '../reducers/Course/Level/FetchLevelReducer.jsx';
import categoryReducer from '../reducers/Course/Category/AddCategoryReducer.jsx';
import addCategory from '../middleware/Course/Category/AddCategoryMiddleware.jsx';
import fetchCourseReducer from '../reducers/Course/Course/FetchCourseDetailReducer.jsx';
import fetchcourseApi from '../middleware/Course/Course/FetchCourseDetailMiddleware.jsx';
import addTopicReducer from '../reducers/Course/Topic/AddTopicReducer.jsx';
import addTopic from '../middleware/Course/Topic/AddTopicMiddleware.jsx';
import AddCourseReducer from '../reducers/Course/Course/AddCourseReducer.jsx';
// import UnenrollCourseApi from '../middleware/LearnerMiddleware/UnenrollApi';
// import UnEnrollReducer from '../reducers/LearnerReducer/UnEnrollReducer';
import LearnerScoreProgressBarGraphReducer from '../reducers/LearnerReducer/LearnerScoreProgressBarGraphReducer.js';
import LearnerScoreProgressBarGraphApi from '../middleware/LearnerMiddleware/LearnerScoreProgressBarGraphApi.js';
import LearnerdashboardReducer from '../reducers/LearnerReducer/LearnerdashboardReducer.js';
import LearnerdashboardApi from '../middleware/LearnerMiddleware/LearnerdashboardApi.js';
import { CoursebyScoreApi } from '../middleware/LearnerMiddleware/CoursebyScoreApi.js';
import CoursebyScoreReducer from '../reducers/LearnerReducer/CoursebyScoreReducer.js';
import FetchIndividualEnrolledCourseReducer from '../reducers/LearnerReducer/FetchIndividualEnrolledCourseReducer.js';
import IndividualEnrollCourseApi from '../middleware/LearnerMiddleware/FetchIndividualEnrolledCourseMiddleware.js';

import GetResultByLearnerIDReducer from '../reducers/Quiz And Feedback Module/Learner/GetResultByLearnerIDReducer.js';
import GetResultByLearnerIDApi from '../middleware/Quiz And Feedback Module/Learner/GetResultByLearnerIDApi.js';
import LearnerFeedbackResultReducer from '../reducers/Quiz And Feedback Module/LearnerFeedbackResultReducer.js';
import LearnerFeedbackResultApi from '../middleware/Quiz And Feedback Module/Learner/LearnerFeedbackResultApi.js';


const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse: courseupdateReducer,
  alllearner: AllLearnerReducer,
  profilecard: ProfileCardReducer,
  profilecourses: ProfileCoursesReducer,
  enrolledcourse: LastEnrolledCourseReducer,
  enabledisablecourse: EnableDisableCourseReducer,
  fetchdashboard: fetchDataReducer,
  learnerreport: ViewLearnersreportsReducer,
  coursereport: ViewCoursereportReducers,
  quizreport: QuizReportReducer,
  email: emailReducer,
  quizpassedusers: quizPassedUserReducer,
  quizfailedusers: quizFailedUserReducer,
  // enrolledCourses:LearnerPostEnrollReducer,
  // fetchcourse: LearnerGetCourseReducer,

  enrolledlearners: EnrollCourseLearner,
  fetchenrollmentreport: EnrollmentReportReducer,
  enrolledpasseduser: EnrollCoursePassedLearnerReducer,
  enrolledprogressuser: EnrollCourseProgressLearnerReducer,
  //sanjai -5
  toplearners: DashboardTopLearnersReducer,
  highestenrolledcourse: DashboardHighestEnrolledCourseReducer,
  recentfeedbackresponse: DashboardRecentFeedbackReducer,
  enrollmentcoursebarchart: DashboardEnrollmentcourseBarchartReducer,

  //
  passwordchangereducer: PasswordChangeReducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse: courseupdateReducer,
  learner: LearnerReducer,
  // verifyemail: fetchEmailReducer,
  otp: OTPReducer,
  fetchcourse: LearnerGetCourseReducer,
  enrolledCourses: LearnerPostEnrollReducer,
  fetchPdf: fetchPdfReducer,
  enroll: enrollmentReducer,
  fetchlearner: FetchRegisterReducer,

  //learner 

  
  watchTime: addWatchTimeReducer,
  learnerdashboard: LearnerdashboardReducer,
  coursebyscore: CoursebyScoreReducer,
  //quizmodule
  quizId: quizIdReducer,
  deleteQuestion: deleteQuizQuestionsReducer,
  editQuizDetails: editQuizReducer,
  updatequizfeedback: UpdateQuizFeedbackReducer,
  deletequizfeedback: DeleteQuizFeedbackReducer,
  updatetopicfeedback: UpdateTopicFeedbackReducer,
  //quizmodule-learner
  learnersresult: GetResultByLearnerIDReducer,
  learnerfeedbackresult : LearnerFeedbackResultReducer,
  //Learner side
  fetchlearnerid: GetLearnerIDReducer,
  AttemptQuiz: AttemptQuizReducer,
  Review: reviewReducer,
  SelectAnswer: SelectAnswerReducer,
  SubmitAttempt: submitAttemptReducer,
  learnerscore: LearnerScorePageReducer,
  fetchquizinstruction: QuizInstructionReducer,
  learnerattempt: LearnerAttemptQuizIdReducer,
  fetchtopicfeedbackquestion: FetchTopicFeedbackQuestionReducer,
  // TopicFeedbackResponse: TopicFeedbackResponseReducer,
  fetchquizfeedbackquestion: FetchQuizFeedbackQuestionReducer,
  QuizFeedbackResponse: QuizFeedbackResponseReducer,
  updateuserprofilereducer: UpdateUserProfileReducer,
  

  // COURSE TEAM  REDUCER
  level: fetchLevelReducer,
  category: fetchCategoryReducer,
  addCategory: categoryReducer,
  fetchCourse: fetchCourseReducer,
  Topic: addTopicReducer,
  fetchTopic: fetchTopicsReducer,
  fetchEnrolledIndividualCourse:FetchIndividualEnrolledCourseReducer,
  fetchEditTopic: fetchEditTopicsReducer,
  updateTopic: updateTopicReducer,
  deleteTopic: deleteTopicReducer,
  deleteContent: deleteContentReducer,
  addContent: AddMaterialReducer,
  fetchMaterialType: fetchMaterialTypeReducer,
  fetchContent: fetchContentReducer,
  fetchIndividualContent: fetchIndividualContentReducer,
  updateContent: updateContentReducer,
fetchContentUrl: fetchContentUrlReducer,
  addcourse: AddCourseReducer,
  fetchindividualCourse: fetchCourseReducer,
  updatecoursefeedback: UpdateCourseFeedbackReducer,



  

});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, LearnerGetCourse, apiMiddleware, ApiForgotpassword, emailMiddleware, apiviewallcourse,
    loginUser, apiDeletecourse, UpdateCourse, apiViewAllLearners, GetProfileCard, GetProfileCourses,
    LastEnrolledCourse, EnableDisableCourse, FetchdashboardData, ApiViewlearnersReport, ApiViewCourseReport,
    ApiViewQuizReport,  VerifyEmailApi,  enrollCourseApi,
    FetchRegisterApi, ApiQuizPassedUsers, ApiQuizFailedUsers, EnrollCourseLearners,
    ApiViewEnrollmentReport, EnrollCoursePassedLearner, EnrollCourseProgressLearner,
    ApiDashboardTopLearners, ApiDashboardHighestEnrolledCourse, ApiRecentFeedbackresponse, ApiDashboardEnrollmentcourseBarchart,
    FetchQuizById,
    DeleteQuizQuestionsApi,
    PutQuizDetails,updateUserData,

    UpdateQuizFeedbackApi,
    DeleteQuizFeedbackApi,
    UpdateTopicFeedbackApi,
    //quiz-learner flow
    GetResultByLearnerIDApi,
  LearnerFeedbackResultApi,
    GetLearnerIDApi,
    fetchQuestionsMiddleware,
    reviewApi,
    selectAnswerMiddleware,
    submitAttemptMiddleware,
    LearnerScorePageApi,
    FetchTopicFeedbackQuestionApi,
    // TopicFeedbackResponseApi,
    FetchQuizFeedbackQuestionApi,
    QuizFeedbackResponseApi,
    QuizInstructionApi,
    LearnerAttemptQuizIdApi,
    //course
    addCourse, addCategory, fetchcategoryApi, fetchlevelApi,
    fetchcourseApi, addTopic, fetchTopicsApi, fetchEditTopicsApi,
    updateTopicsApi, deleteTopic, addContent, fetchMaterialTypeApi,
    fetchContentApi, deleteContentApi, fetchIndividualContentApi,
    updateContentApi, fetchContentUrlApi, fetchcourseApi,
    //learner
   LearnerdashboardApi, watchTimeApi,IndividualEnrollCourseApi, UpdateCourseFeedbackApi,
  //  updatePasswordApi
  )
);

export default store;