package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VehiclesScreen(onCreate:()->Unit){Card{Column{Text("Vehicles");Text("Domain-specific vehicles workflow");Button(onClick=onCreate){Text("Create")}}}}
