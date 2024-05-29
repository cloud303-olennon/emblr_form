<script lang="ts">
  import ObjectArray from "./ObjectArray.svelte";
  export let data;
</script>

<body class="bg-secondary-500">
  <div class="grid gap-6 mb-6 bg-secondary-500 justify-center">
    <form method="post" action="?/submit">
      {#each data.fields as { field, desc, type, limit, objects }}
        <div class="form_div flex items-center border-b-2 border-primary-900">
          <div class="flex flex-col mr-4 w-1/3 align-top">
            <label
              class="block font-bold text-primary-500 text-3xl dark:text-black"
              for={field}
              id="checklabel"
              >{field}
            </label>
            <p class="text-lg">{desc}</p>
          </div>
          <div class="flex-1">
            {#if type === "checkbox"}
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name={field}>
              <label class="form-check-label text-lg" for="flexSwitchCheckDefault">Yes</label>
            </div>
            {:else if type === "text" || type === "number"}
              <input
                {type}
                id={field}
                name={field}
                min="0"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={field}
              />
            {:else if type === "object_array"}
              <div>
                <ObjectArray objects={objects} limit={limit} />
              </div>
            {:else}
              <p>oops wrong type</p>
            {/if}
          </div>
        </div>
      {/each}
      <div class="justify-items-center mt-2">
        <button
          type="submit"
          class="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Submit</button
        >
      </div>
    </form>
  </div>
</body>
