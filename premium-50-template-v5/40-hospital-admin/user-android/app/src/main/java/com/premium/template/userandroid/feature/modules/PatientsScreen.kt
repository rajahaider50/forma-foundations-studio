package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PatientsScreen(onCreate:()->Unit){Card{Column{Text("Patients");Text("Domain-specific patients workflow");Button(onClick=onCreate){Text("Create")}}}}
