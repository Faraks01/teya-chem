/**
 * @param {string} id - An element id reference
 * @param {ScrollBehavior} [behavior] - A scrollIntoView behavior
 * @returns {void}
 * */
export const navigateToAnchor = (id, behavior = "smooth") => {
  const element = document.getElementById(id);

  if (element !== null) {
    element.scrollIntoView({ behavior });
  }
};
