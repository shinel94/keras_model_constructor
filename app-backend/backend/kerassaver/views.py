from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import ast
import keras
import keras.layers as keras_layers
# Create your views here.

@csrf_exempt
def saver(request):
    layers = ast.literal_eval(request.body.decode('utf-8'))['layer']
    keras_layer_list = []
    for layer in layers:
        if layer['name'] == 'Input':
            keras_layer_list.append(keras_layers.Input(shape=(int(layer['height']),
                                                              int(layer['width']),
                                                              int(layer['channel'])),
                                                       name=layer['id']))
        elif layer['name'] == 'Conv2D':
            keras_layer_list.append(keras_layers.Conv2D(filters=int(layer['filters']),
                                                        kernel_size=int(layer['size']),
                                                        strides=int(layer['stride']),
                                                        activation=layer['activation'], name=layer['id']))
        elif layer['name'] == 'Deconv2D':
            keras_layer_list.append(keras_layers.Conv2DTranspose(filters=int(layer['filters']),
                                                                 kernel_size=int(layer['size']),
                                                                 strides=int(layer['stride']),
                                                                 activation=layer['activation'], name=layer['id']))
        elif layer['name'] == 'GAP':
            keras_layer_list.append(keras_layers.GlobalAveragePooling2D(name=layer['id']))
        elif layer['name'] == 'Dense':
            keras_layer_list.append(keras_layers.Dense(units=int(layer['unit']),
                                                       activation=layer['activation'],
                                                       name=layer['id']))
    inputs = keras_layer_list[0]
    outputs = inputs
    for x in keras_layer_list[1:]:
        outputs = x(outputs)
    model = keras.Model(inputs, outputs)
    model.summary()
    model.save('./save_model.h5')

    return render(request, "kerassaver/none.html")