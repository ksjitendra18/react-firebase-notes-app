import React from 'react'
import DashNav from '../Dashboard/DashNav'

const Notes = () => {
  return (

    <>
    <DashNav/>
    <section id="notes">
      <div class="head-section">
        <h2>Your Notes</h2>
        <button class="btn-add-new-note">Add a new note</button>
      </div>

      <div class="notes-card-list">
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 1</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 2</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 3</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 3</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 3</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
        <div class="notes-card">
          <h2 class="notes-card__heading">Notes Title 3</h2>
          <p class="notes-card__summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
            doloribus impedit quia. Esse perferendis expedita alias.
          </p>

          <div class="notes-card__controls">
            <p class="notes-card__controls-edit">Edit</p>
            <p class="notes-card__controls-delete">Delete</p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Notes