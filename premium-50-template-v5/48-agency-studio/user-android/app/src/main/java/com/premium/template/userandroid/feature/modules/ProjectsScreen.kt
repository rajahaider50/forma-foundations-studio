package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ProjectsScreen(onCreate:()->Unit){Card{Column{Text("Projects");Text("Domain-specific projects workflow");Button(onClick=onCreate){Text("Create")}}}}
