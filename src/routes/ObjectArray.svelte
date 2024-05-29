<!-- ObjectArray.svelte -->
<script lang="ts">
  export let objects: any[] = [];
  export let limit;
  let data = objects.map((data) => ({
    field: data.field,
    desc: data.desc,
    type: data.type,
  }));

  let counter = 1;
  let count = [counter];
  let addOne = () => {
    if (count.length < limit) {
      count = [...count, ++counter];
    }
  };
  let dontAddOne = () => {
    if (count.length > 1) {
      counter--;
      count = count.slice(0, -1);
    }
  };
</script>

<div class="flex"></div>

<div class="flex-column">
  {#each count as c}
    <div class="border-b-2 border-secondary-800 mb-3">
      {#each objects as { field, desc, type }}
        <label
          class="block font-bold text-primary-500 text-xl dark:text-black"
          for={field + c}
          id="checklabel"
          >{field}
        </label>
        <div class="mb-3">
          {#if type === "checkbox"}
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                name={field + c}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Yes</label
              >
            </div>
          {:else if type === "text" || type === "number"}
            <input
              {type}
              id={field + c}
              name={field + c}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={field}
            />
          {:else}
            <p>oops wrong type</p>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
  <div class="mb-auto mt-auto">
    <button
      on:click={addOne}
      type="button"
      class="text-black bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >More +</button
    >
    <button
      on:click={dontAddOne}
      type="button"
      class="text-black bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Less -</button
    >
  </div>
</div>
