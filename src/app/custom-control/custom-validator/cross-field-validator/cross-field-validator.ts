import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { Room } from './room.dodel';

export  function crossFieldValidator(minAge: number): ValidatorFn {
      return (formGroup: FormGroup) : ValidationErrors | null => {
        const ageControl = formGroup.get('age');
        const roomControl = formGroup.get('room');
  
        if (!ageControl || !roomControl) {
          return null;
        }
  
        const ageValue = ageControl.value;
        console.log('crossFieldValidator.ageValue',ageValue)
  
        if (!ageValue) {
          return null;
        }
  
        if (ageValue >= minAge) {
          return null;
        }
  
        const roomsValue = roomControl.value ;
  
        if (!roomsValue) {
          return null;
        }
        console.log('crossFieldValidator.roomsValue ',roomsValue )
        if (roomsValue === 'room2' || roomsValue === 'room3') {
          return { roomOnlyWith18: true }; // This is our error!
        }
  
        return null;
      };
    }
 