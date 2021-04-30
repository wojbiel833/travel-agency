/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;
export const getAllTags = ({ tags }) => tags;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration) {
    output = output.filter(
      trip =>
        trip.days >= filters.duration.from && trip.days <= filters.duration.to
    );
  }
  // TODO - filter by tags
  if (filters.tags) {
    output = output.filter(trip => {
      let isOkay = true;

      for (let tag of filters.tags) {
        if (filters.tags.includes(tag)) {
          const tripTags = { ...trip.tags };

          if (!Object.values(tripTags).includes(tag)) {
            isOkay = false;
          }
        }
      }

      return isOkay;
    });
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter(trip => new RegExp(tripId).test(trip.id));

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  console.log(filtered[0]);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter(trip =>
    new RegExp(countryCode).test(trip.country.code)
  );

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  console.log(filtered.country);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
