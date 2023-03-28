import React, {useContext, useEffect} from 'react'
import AuthContext from '../Context/AuthContext'
import PartnerDashboard from './PartnerDashboard';

function Partner() {

  let {userType, updateToken} = useContext(AuthContext)

  

  document.title = 'Partner';

  useEffect(()=>{
    updateToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    return (
      <>
        {
          userType === 'is_partner' ? 
          <>
          <PartnerDashboard/>
          </>
          : 
          <h1>You Don't Have Access of Partner</h1>
        }
      </>
    )

}

export default Partner;
