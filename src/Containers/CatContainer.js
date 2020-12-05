import React, { useEffect } from 'react';
import { connect } from "react-redux";
import CatCard from '../Components/CatCard'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CatFilter from '../Components/CatFilter';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(20),
  },
}));

const CatContainer = (props) => {
  const spacing = 4
  const classes = useStyles();

  const clearClickedCat = () => {
    if (props.clickedCat.name !== undefined) {
      props.set_clicked_cat({})
      props.set_clicked_cat_loc({})
      props.set_clicked_cat_located(false)
      props.set_clicked_cat_org({})
    }
  }

  const getAdoptableKeys = () => {
    let fetchUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://friendinmeow2.herokuapp.com'

    fetch(`${fetchUrl}/adoptable`)
      .then(res => res.json())
      .then(obj => getAdoptableToken(obj.api_key, obj.secret_key))
  }

  const getAdoptableToken = (apiKey, secretKey) => {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secretKey}`
    })
      .then(res => res.json())
      .then(token => getAdoptableCats(token.access_token))
  }

  const getAdoptableCats = (accessToken) => {
    let catUrl = ''

    if (props.userPostalCode.toString().length < 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&page=${props.adoptableCatsPage}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}`
    } else if (props.userPostalCode.toString().length === 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&sort=distance&location=${props.userPostalCode}&distance=${props.userRadius}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}&page=${props.adoptableCatsPage}`
    }
    fetch(catUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => {
        props.set_cats(res.animals)
        props.set_cats_total(res.pagination.total_count)
        props.set_cats_pages(res.pagination.total_pages)
      })
      .catch(() => {
        getAdoptableKeys2()
      })
  }

  const getAdoptableKeys2 = () => {
    let fetchUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://friendinmeow2.herokuapp.com'

    fetch(`${fetchUrl}/adoptable2`)
      .then(res => res.json())
      .then(obj => getAdoptableToken2(obj.api_key, obj.secret_key))
  }

  const getAdoptableToken2 = (apiKey, secretKey) => {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secretKey}`
    })
      .then(res => res.json())
      .then(token => getAdoptableCats2(token.access_token))
  }

  const getAdoptableCats2 = (accessToken) => {
    let catUrl = ''

    if (props.userPostalCode.toString().length < 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&page=${props.adoptableCatsPage}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}`
    } else if (props.userPostalCode.toString().length === 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&sort=distance&location=${props.userPostalCode}&distance=${props.userRadius}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}&page=${props.adoptableCatsPage}`
    }
    fetch(catUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => {
        props.set_cats(res.animals)
        props.set_cats_total(res.pagination.total_count)
        props.set_cats_pages(res.pagination.total_pages)
      })
      .catch(() => {
        getAdoptableKeys3()
      })
  }

  const getAdoptableKeys3 = () => {
    let fetchUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://friendinmeow2.herokuapp.com'

    fetch(`${fetchUrl}/adoptable3`)
      .then(res => res.json())
      .then(obj => getAdoptableToken3(obj.api_key, obj.secret_key))
  }

  const getAdoptableToken3 = (apiKey, secretKey) => {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secretKey}`
    })
      .then(res => res.json())
      .then(token => getAdoptableCats3(token.access_token))
  }

  const getAdoptableCats3 = (accessToken) => {
    let catUrl = ''

    if (props.userPostalCode.toString().length < 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&page=${props.adoptableCatsPage}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}`
    } else if (props.userPostalCode.toString().length === 5) {
      catUrl = `https://api.petfinder.com/v2/animals?type=cat&sort=distance&location=${props.userPostalCode}&distance=${props.userRadius}&breed=${props.filterBreed}&gender=${props.filterGender}&age=${props.filterAge}&page=${props.adoptableCatsPage}`
    }
    fetch(catUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res => {
        props.set_cats(res.animals)
        props.set_cats_total(res.pagination.total_count)
        props.set_cats_pages(res.pagination.total_pages)
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }

  useEffect(() => {
    clearClickedCat()
    props.change_route("/adoptable")
  }, [])

  useEffect(() => {
    getAdoptableKeys()
  }, [props.adoptableCatsPage, props.userPostalCode, props.userRadius, props.filterBreed, props.filterGender, props.filterAge])

  const catCards = (
    props.adoptableCats.map(cat => <Grid item>
      <CatCard
        key={cat.id}
        cat={cat}
        className={classes.paper}
      />
    </Grid>)
  )

  const noCats = (
    <Typography className="no-cats2" variant="body2" color="textPrimary" component="p">
      Please widen your search criteria.
    </Typography>
  )

  return (
    <div className="filter-adoptable">
      <CatFilter />
      <Grid container className={classes.root} spacing={12}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {props.adoptableCats.length > 0 ? catCards : noCats}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    set_cats: (cats) => dispatch({ type: 'SET_CATS', adoptableCats: cats }),
    set_cats_total: (total) => dispatch({ type: 'SET_CATS_TOTAL', adoptableCatsTotal: total }),
    set_cats_pages: (number) => dispatch({ type: 'SET_CATS_PAGES', adoptableCatsPages: number }),
    set_clicked_cat: (cat) => dispatch({ type: 'SET_CLICKED_CAT', clickedCat: cat }),
    set_clicked_cat_loc: (loc) => dispatch({ type: 'SET_CLICKED_CAT_LOC', clickedCatLoc: loc }),
    set_clicked_cat_org: (org) => dispatch({ type: 'SET_CLICKED_CAT_ORG', clickedCatOrg: org }),
    set_clicked_cat_located: (status) => dispatch({ type: 'SET_CLICKED_CAT_LOCATED', clickedCatLocated: status }),
    change_route: (routeName) => dispatch({ type: 'CHANGE_ROUTE', newRoute: routeName })
  }
}

const mapStateToProps = (state) => {
  return {
    clickedCat: state.catState.clickedCat,
    clickedCatLoc: state.catState.clickedCatLoc,
    clickedCatLocated: state.catState.clickedCatLocated,
    adoptableCats: state.catState.adoptableCats,
    adoptableCatsPage: state.catState.adoptableCatsPage,
    filterBreed: state.catState.filterBreed,
    filterGender: state.catState.filterGender,
    filterAge: state.catState.filterAge,
    userPostalCode: state.userState.userPostalCode,
    userRadius: state.userState.userRadius
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);