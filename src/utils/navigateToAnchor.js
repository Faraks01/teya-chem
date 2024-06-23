/**
 * @param {string} id - An element id reference
 * @returns {void}
 * */
export const navigateToAnchor = (id) => {
  const element = document.getElementById(id);

  if (element !== null) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
