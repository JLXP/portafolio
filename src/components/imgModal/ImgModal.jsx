export const ModalImg = ({ imagen, isOpen, onToggle }) => {
  
  return (

    isOpen ? <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed overflow-hidden z-50 w-full p-4 md:inset-0  md:h-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={onToggle}>
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-end">
            <button type="button" class="absolute right-2 top-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal" onClick={onToggle}>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>          
              <img src={imagen.src}/>      
          </div>
        
        </div>
      </div>
    </div> : null

  );
}