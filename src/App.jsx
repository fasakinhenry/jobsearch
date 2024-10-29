import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { LandingPage, Login, Signup, ParticularJob } from './pages/App';
import {
  Home,
  Notifications,
  MyJobs,
  CreateJob,
  Profile,
  Companies,
  Messages,
  FindWork,
} from './pages/User';
import { NotFound } from './pages';
import PrivateRoutes from './utils/PrivateRoutes';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
        <Route path='' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/find-work' element={<FindWork />} />
          <Route path='/my-jobs/create' element={<CreateJob />} />
          <Route path='/messages' element={<Messages />} />
        </Route>
        <Route path='/jobs/:id' element={<ParticularJob />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
