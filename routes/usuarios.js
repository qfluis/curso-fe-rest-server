const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require ('../controllers/usuarios')

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de tener más de 6 letras').isLength({ min: 6 }),
    check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
] , usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch)


module.exports = router;