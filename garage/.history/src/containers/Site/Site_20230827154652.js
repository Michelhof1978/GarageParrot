import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Carsearch from '../Site/voitureoccasion';
import VehiculeDetails from '../../components/Vehicules/VehiculeDetails';



class Site extends Component {
@@ -24,6 +26,7 @@ class Site extends Component {
          <Route path="/parebrise" element={<h1>PareBrise</h1>} />
          <Route path="/vidange" element={<h1>Vidange</h1>} />
          <Route path="/voitureoccasion" element={<Carsearch />} />
          <Route path="/voituredetails/:id" element={<VehiculeDetails/>} />
          <Route path="/contact" element={<h1>Page de Contact</h1>} />
        </Routes>
        </div>
        <div className='minsite'></div> {/*  //pour le footer */}
        <Footer />
        </>
    );
  }
}
export default Site;
